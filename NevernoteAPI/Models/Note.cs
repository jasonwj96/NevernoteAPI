using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NevernoteAPI.Models
{
    public class Note
    {
        public string Id
        {
            get;
            set;
        }

        public string Title
        {
            get;
            set;
        }

        public string Description
        {
            get;
            set;
        }

        public string DateCreated
        {
            get;
            set;
        }

        public List<string> Tags
        {
            get;
            set;
        }

        public bool IsFavorite
        {
            get;
            set;
        }

        public override string ToString()
        {
            return String.Format("Id: {0}, Title: {1}, Description: {2},+} DateCreated: {3}, Tags: {4}, IsFavorite: {5}", Id, Title, Description, DateCreated, Tags, IsFavorite);
        }
    }
}