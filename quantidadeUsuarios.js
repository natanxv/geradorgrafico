import*as commonJs from"./common.js"
async function quantidadeUsuarioPorRede(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res=await fetch(url)
    const dados=await res.json()
    const nomeDasRedes=Object.keys(dados)
    const quantidadeDeUsuarios=Object.values(dados)
    const data=[
        {
            x:nomeDasRedes,
            y:quantidadeDeUsuarios,
            type:'bar',
            marker:{
                color:commonJs.getCSS('--primary-color')

            }
        }
    ]
    const laytout={
        plot_bgcolor:commonJs.getCSS('--bg-color'),
        paper_bgcolor:commonJs.getCSS('--bg-color'),
        title:{
            text:'Rede social com mais usuário',
            x:0,
            font:{
                color:commonJs.getCSS('--primary-color'),
                size:30,
                font:commonJs.getCSS('--font')

            }
        },
        xaxis:{
            tickfont:commonJs.tickConfig,
            title:{
                text:'Nome das redes',
                font:{
                    color:commonJs.getCSS('--secondary-color')
                }
            }
        },
        yaxis:{
            tickfont:commonJs.tickConfig,
            title:{
                text:'bilhões de usuários ativos',
                font:{
                    color:commonJs.getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico=document.createElement('div')
    grafico.className='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data,laytout)
}
quantidadeUsuarioPorRede()