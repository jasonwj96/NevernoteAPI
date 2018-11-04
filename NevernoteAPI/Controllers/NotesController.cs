﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NevernoteAPI.Models;
using NevernoteAPI.Data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NevernoteAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly NevernoteContext _dbcontext;

        public NotesController(NevernoteContext database)
        {
            _dbcontext = database;
        }

        //Returns current day's date in dd/mm/yy format.
        public static string Today()
        {
            return String.Format("{0}/{1}/{2}", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year);
        }

        // GET api/notes
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var notes = await _dbcontext.Notes.ToListAsync<Note>();

            return new JsonResult(notes);
        }

        // POST api/notes
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Note note)
        {
            note.DateCreated = Today();

            await _dbcontext.Notes.AddAsync(note);
            await _dbcontext.SaveChangesAsync();
            
            return new JsonResult("Note successfully added");
        }

        // DELETE api/notes?id=1
        [HttpDelete]
        public async Task<ActionResult> Delete([FromQuery] int id)
        {
            _dbcontext.Notes.Remove(_dbcontext.Notes.Find(id));

            await _dbcontext.SaveChangesAsync();

            return new JsonResult("Note successfully deleted");
        }

        // PUT api/notes
        [HttpPut]
        public async Task<ActionResult> Put([FromBody] Note note)
        {
            var entity = await _dbcontext.Notes.FirstOrDefaultAsync(n => n.Id == note.Id);

            entity.Title = note.Title;
            entity.Description = note.Description;
            entity.DateCreated = Today();
            entity.IsFavorite = note.IsFavorite;
            entity.Tags = note.Tags;

            _dbcontext.Update(entity);

            await _dbcontext.SaveChangesAsync();

            return new JsonResult("Note successfully updated");
        }
    }
}