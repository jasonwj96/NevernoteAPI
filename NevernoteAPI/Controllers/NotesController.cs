using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NevernoteAPI.Models;
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
        private readonly DatabaseContext _dbcontext;

        NotesController(DatabaseContext database)
        {
            _dbcontext = database;
        }

        // GET api/notes
        [HttpGet]
        public ActionResult Get()
        {
            var notes = new List<Note>();

            return new JsonResult(notes);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Note note)
        {
            _dbcontext.Notes.Add(note);

            return StatusCode(200);
        }
    }
}