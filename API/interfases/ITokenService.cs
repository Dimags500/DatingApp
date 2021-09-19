using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.interfases
{
    public interface ITokenService
    {
        public string CreateToken(AppUser user);
    }
}
