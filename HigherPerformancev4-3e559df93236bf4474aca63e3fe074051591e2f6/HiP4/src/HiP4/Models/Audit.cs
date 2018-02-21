using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiP4.Models
{
    abstract public class Audit
    {
        public bool IsActive { get; set; }
        public DateTime TimeCreated { get; set; }
    }
}
