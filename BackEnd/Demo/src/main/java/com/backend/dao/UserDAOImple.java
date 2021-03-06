package com.backend.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.backend.dto.UserVO;

@Repository
public class UserDAOImple implements UserDAO{
	
	@Inject
	private SqlSession sqlSession;
	private static final String Namespace = "com.backend.mapper.userMapper";
	
	@Override
	public List<UserVO> selectUser() throws Exception{
		
		return sqlSession.selectList(Namespace+".selectUser");
	}
	
	@Override
	public List<UserVO> newUserCheck(UserVO user) throws Exception{
		
		return sqlSession.selectList(Namespace+".newUserCheck",user);
		
	}
	
	@Override
	public String getNewUserid() throws Exception{
		
		int latest = (Integer)sqlSession.selectOne(Namespace+".getNewUserid")+1;
		
		updateNewUser(latest);
		
		return String.valueOf(latest);
		
	}

	@Override
	public void newUser(UserVO newUser) throws Exception {
		
		sqlSession.insert(Namespace+".newUser", newUser);
		
	}

	@Override
	public String getUserid(UserVO user) throws Exception {
		
		return sqlSession.selectOne(Namespace+".getUserid", user);
	}

	@Override
	public void updateNewUser(int newUser) throws Exception {
		
		sqlSession.update(Namespace+".updateNewUser", newUser);
		
	}

	@Override
	public UserVO getById(String userid) throws Exception {
		UserVO user = sqlSession.selectOne(Namespace+".getById", userid);
		
		return user;
	}

	@Override
	public void updateToken(UserVO user) throws Exception {
		sqlSession.update(Namespace+".updateToken", user);
		
	}

}
