using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NevernoteAPI.Models
{
    public class Note
    {
        [Key]
        public string NoteId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Title { get; set; }

        public string Description { get; set; }

        public string DateCreated { get; set; }

        public List<string> Tags { get; set; }

        public bool IsFavorite { get; set; }
    }
}