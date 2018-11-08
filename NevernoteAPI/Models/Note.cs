using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NevernoteAPI.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string LastUpdated { get; set; }
        public string Tags { get; set; }
        public bool? IsFavorite { get; set; }
    }
}

