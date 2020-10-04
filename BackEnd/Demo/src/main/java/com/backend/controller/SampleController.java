package com.backend.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.backend.dto.UserVO;
import com.backend.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/sample/*")
@Slf4j
public class SampleController {
	
	@Inject
	private UserService service;
	
	@GetMapping("/db")
	public String returnDB(Model model) throws Exception{
		
		List<UserVO> userlist = service.selectUser();
		model.addAttribute("userlist",userlist);
		return "userlist";
	}
	
	@GetMapping("/test")
	public String thisisTest(Model model) {
		return "test";
	}
	
	@PostMapping("/response")
	public @ResponseBody String shareFB(@RequestBody UserInfo requestuser) {
		
		UserInfo user = new UserInfo();
		user.setUserEmail("swamys@naver.com");
		user.setUserName("suram");
		
		UserInfo user2 = new UserInfo();
		user2.setUserEmail("swamys0031@gmail.com");
		user2.setUserName("soolam");
		
		ArrayList<UserInfo> userlist = new ArrayList<UserInfo>();
		userlist.add(user);
		userlist.add(user2);
		
		
		UserInfo request = requestuser;
		System.out.println(request.getUserEmail());
		
		
		return "Success";
	}
	
}