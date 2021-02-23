function solution(day) {
	let answer = '';

  const now = Date();

  console.log(now)
  const dayData  = day.split('.')

  const date = new Date(dayData[0], dayData[1]-1, dayData[2])

  console.log(date)
	
	/* 로직을 작성해주세요.*/
	
	return answer
}

solution("2020.02.08")