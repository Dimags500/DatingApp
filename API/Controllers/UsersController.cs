﻿using API.Data;
using API.Entities;
using API.interfases;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]


    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;



        public UsersController(IUserRepository userRepository  , IMapper mapper )
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }


        //users
        [HttpGet]
        public  async Task <ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {

            var users = await _userRepository.GetMembersAsync();

            return Ok(users);


        }
        //users/username
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUserByName(string username)
        {

            return await _userRepository.GetMemberAsync(username);

        }


        ////users/id
        //[HttpGet("{:id}")]
        //public async Task<ActionResult<AppUser>> GetUserById(int id)
        //{
        //    return await _userRepository.GetUserById(id);
    
        //}

    }

}
    

