using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NevernoteAPI.Models;

namespace NevernoteAPI.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        // GET api/notes
        [HttpGet]
        public ActionResult Get()
        {
            var notes = new List<Note>();

            for (int i = 0; i < 10; i++)
            {
                var newNote = new Note();
                newNote.Id = i.ToString();
                newNote.Title = $"Note #{i + 1} from .Net Core API";
                newNote.DateCreated = String.Format("{0}/{1}/{2}", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year);
                newNote.Description = "This is a description from the .Net Core API";
                newNote.IsFavorite = false;
                newNote.Tags = new List<string>();
                newNote.Tags.Add("Work");
                newNote.Tags.Add("College");

                Debug.WriteLine(newNote.ToString());

                notes.Add(newNote);
            }

            return new JsonResult(notes);
        }

        // GET api/notes/id
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "${id}";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}