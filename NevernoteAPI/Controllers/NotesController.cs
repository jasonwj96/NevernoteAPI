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
            note.DateCreated = String.Format("{0}/{1}/{2}", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year);
            await _dbcontext.Notes.AddAsync(note);
            _dbcontext.SaveChanges();
            return new JsonResult(note);
        }
    }
}