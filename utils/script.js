const handleRequest = () =>{
    const url = `http://localhost:4000/game`;
    const token =  "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg3MTcwMTFhOGU5NzA4ZDhlNmNkNjYiLCJ1c2VybmFtZSI6ImltcmFuIiwiaWF0IjoxNjE5NTI3Mjg5LCJleHAiOjE2MTk1MzA4ODl9.AgV34oLf2ipIM8sYW20tmnG-DVOlUIqbqcSIgsicEHc"

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}