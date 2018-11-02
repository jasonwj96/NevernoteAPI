using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NevernoteAPI.Models;
using NevernoteAPI.Data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

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

        public static string Today()
        {
            return String.Format("{0}/{1}/{2}", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year);
        }

        // GET api/notes
        [HttpGet]
        public ActionResult Get()
        {
            var notes = _dbcontext.Notes.ToList<Note>();

            return new JsonResult(notes);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Note note)
        {
            note.DateCreated = Today();

            await _dbcontext.Notes.AddAsync(note);
            await _dbcontext.SaveChangesAsync();

            return new JsonResult(note);
        }

        [HttpDelete]
        public async Task<ActionResult> Delete([FromQuery] int id)
        {
            _dbcontext.Notes.Remove(_dbcontext.Notes.Find(id));
            await _dbcontext.SaveChangesAsync();

            return new JsonResult("Note successfully deleted");
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromQuery] int id, [FromBody] Note note)
        {
            var entity = _dbcontext.Notes.FirstOrDefault(n => n.Id == id);

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