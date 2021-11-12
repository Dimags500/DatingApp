using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public class MemberDto
    {
        public int id { get; set; }
        public string UserName { get; set; }

        public string PhotoUrl { get; set; }
        public string KnowAs { get; set; }

        public DateTime Created { get; set; } 

        public DateTime LastActive { get; set; } 

        public string Gender { get; set; }

        public string Introduction { get; set; }

        public string Interests { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public ICollection<PhotoDto> Photos  { get; set; }
        public object Age { get; internal set; }
    }
}
