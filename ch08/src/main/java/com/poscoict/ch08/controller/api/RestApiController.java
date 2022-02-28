package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.UserVo;

// restful 스타일

@RestController // 이걸 선언하면 ResoponseBody, RequestBody 안써줘도됨
@RequestMapping("/api/user")
public class RestApiController {
	
	@PostMapping("")
	public Object create(@RequestBody UserVo vo) {
		System.out.println(vo);
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo); // 화면변경에 따라 잘 return 해줘야함
	}
	

	@GetMapping("")
	public Object read() {
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo1 = new UserVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		list.add(vo1);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		list.add(vo2);
		
		return JsonResult.success(list); // 화면변경에 따라 잘 return 해줘야함
	}

	@GetMapping("/{no}")
	public Object read(@PathVariable("no") Long no) {
		System.out.println("no:" + no);

		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");

		return JsonResult.success(vo2); // 화면변경에 따라 잘 return 해줘야함
	}
	
	@PutMapping("/{no}")
	public Object update(@PathVariable("no") Long no , @RequestBody UserVo vo ) {  // @AuthUser UserVo authUserVo
		System.out.println("no: " + no);
		System.out.println("uservo: " + vo);
		
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo); // 화면변경에 따라 잘 return 해줘야함
	}
	
	@DeleteMapping("/{no}")
	public Object delete(@PathVariable("no") Long no 
						, @RequestParam(value="password", required = true, defaultValue="") String password ) {
		System.out.println("no : " + no);
		System.out.println("password : " + password);
		
		return JsonResult.success(no);
	}
	
}