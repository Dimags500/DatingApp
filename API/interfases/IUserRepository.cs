using API.Data;
using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.interfases
{
     public interface IUserRepository
    {

        void Update(AppUser user);

        Task<bool> SaveAllAsync();

        Task<AppUser> GetUserById(int id);
        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser> GetUserByUsernameAsync(string username);

        Task<IEnumerable<MemberDto>> GetMembersAsync();
        Task<MemberDto> GetMemberAsync(string username);

    }
}
