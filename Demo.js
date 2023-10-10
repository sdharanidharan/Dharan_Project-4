

function Demo() {
    const URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBUQEBAVFRUVFRcYEhAXFRAVGBkWFRgWGBYXFRUYHSggGBolHRYVITEhJSkxLi4uIyAzODMtNygtLisBCgoKDg0OGBAQGi0lICU2LSstLS0tKy0tNy8tKzctLS0vLS0rLS0vKy0tLS0tLS0tKy0rLS03Ny0tLzctLS0rLf/ /ildZndWetut23bq2+oG1hcZCpfL0dvkk9PKzTv1PdTEQho5JOzdtW7K13Za9UaUOCUlPPeXS67ttEktLdEklbbTwRnqYFOTlmfeazrTWMVpBPpG7bfjd+IGWWLppJuaSdrN6b7egeLp5c+ZZbtX13V7r2szVxPDc7d7SUopSUvGKai7RtfeWmmuqPUeFxyKGeTipOTTyPM3dyzXj1bb08fDQDO8ZT/8AJH5+Ltp466GSjXjO+WSdnZ26Oykvo0/Ro0JcJisiXeUU01J775dlrZyk/Nu+6Rt4HCRpQyrW7blJ7tvr8kkvBJLoBnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";
    return (
        <div style={{ margin: '0 20%' }}>
            <div >
                <h2>Story</h2>
                <img alt='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5t0OlUWXW2LkmZBEI68Dtg9UCj0uk07-s61uScgSljH-axgcaitjc_okNqTopOvjfhk&usqp=CAU"
                    style={{ float: 'left', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <br />
            <div>
                <h2>Cartoon</h2>
                <img src={URL} style={{ float: 'right', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <div >
                <h2>L0v3</h2>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRUWFRIYGBgZEhUYGhgYGBgeEhkYGhoZGhoaGBkcIS4lHB4rHxgZJjgmLC8xNTY1GiQ7QD0zPy40NTEBDAwMEA8QGhISHDQrJSU0NDQ0NzQ0NTQxNDQ0MTExNDQ0ND00NDQ0PTQ0MTQ0NDQ0NDE0NDQ0NDQ0NDExNTQ0P// + +9UtbtMRCnPmilO0JlbbQByimzPoMoI0PJjwPYLmel2sF/fZKfIB8zeWUGalRDXJVyq6jq6MfeObfqZcSmF3C3z8TJ6hyJ8jk3ttJ2/Q95u/ /0iNfaGI/ +6T8AiJhKPjCekj+7cX/hj+dJzbZPtJ+D6REjZ1vFfbM6sRErdwiIgIiIEGIiFb//Z"
                    style={{ float: 'left', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <br />
            <div >
                <h2>Alone</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTLTGU1kI3hMQpzxIWOx125TzCl_XAC2Rag&usqp=CAU" style={{ float: 'right', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
        </div>
    );
}
export default Demo;
