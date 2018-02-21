using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiP4.Models
{
    public class Posts : Audit
    {
        public int Id { get; set; }
        public  string Title { get; set; }
        public int TopicId { get; set; }
        public string Message { get; set; }
        public string Category { get; set; }
        public int Likes { get; set; }
        public string User { get; set; }
        
    }
}
