import React from 'react'
import Header from '../../components/Header'
import ArrowInsert from '../../assets/arrow-insert.png'
import ArrowModel from '../../assets/arrow-model.svg'
import Search from '../../assets/search.svg'
import './style.css'
import { useEffect } from 'react'
const index = () => {

    useEffect(() => {
        const container = document.querySelector('.containerGeral')
        const menu = document.querySelector('.container-search')
        const height = menu.clientHeight

        menu.style.height = String(height)
    }, [])

  return (
    <div className='containerGeral'>
        <Header text={'Sair'}/>
        <div className='grid'>
            <div className='container-search'>
                <h2>Opções de busca</h2>
                <ul> 
                    <li>
                        <button>
                            <img src={ArrowInsert} alt="icon Arrow in pointed for right" />
                            <span>Cpf</span>
                        </button>
                    </li>

                    <li>
                        <button>
                            <img src={ArrowInsert} alt="icon Arrow in pointed for right" />
                            <span>Cnh</span>
                        </button>
                    </li>

                    <li>
                        <button>
                            <img src={ArrowInsert} alt="icon Arrow in pointed for right" />
                            <span>Nome</span>
                        </button>
                    </li>

                    <li>
                        <button>
                            <img src={ArrowInsert} alt="icon Arrow in pointed for right" />
                            <span>Rg</span>
                        </button>
                    </li>

                    <li>
                        <button>
                            <img src={ArrowInsert} alt="icon Arrow in pointed for right" />
                            <span>Titulo de eleitor</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className='form'>
                <form>
                    <button>
                        <img src={Search} alt="Icon in input search (lupa)" />
                    </button>
                    <input type="text" placeholder='CPF:'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default index