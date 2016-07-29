using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiP4.Models
{
    public class Replies : Audit
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public string User { get; set; }
        public int PostId { get; set; }


    }
}
