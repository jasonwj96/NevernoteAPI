using System;
using System.Collections.Generic;

namespace NevernoteAPI.Models
{
    public partial class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string DateCreated { get; set; }
        public string Tags { get; set; }
        public bool? IsFavorite { get; set; }
    }
}
