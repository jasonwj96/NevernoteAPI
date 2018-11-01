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

            // for (var i = 0; i < 10; i++)
            // {
            //     var note = new Note()
            //     {
            //         Id = i,
            //         Title = String.Format("Note #{0}", i),
            //         Description = "Description",
            //         DateCreated = DateTime.Now.ToString(),
            //         Tags = "",
            //         IsFavorite = true
            //     };

            //     notes.Add(note);
            // }

            return new JsonResult(notes);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Note note)
        {
            _dbcontext.Notes.Add(note);
            _dbcontext.SaveChanges();
            return new JsonResult(note);
        }
    }
}