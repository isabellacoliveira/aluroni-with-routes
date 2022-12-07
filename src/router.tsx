import Footer from 'components/Footer';
import Menu from 'components/Menu';
import NaoEncontrada from 'components/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import Prato from 'components/Prato';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'; 

export default function AppRouter(){
    return (
            <main className='container'>
            <Router> 
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                         <Route index element={<Inicio />}/>
                         <Route path='cardapio' element={<Cardapio />}/>
                         <Route path='sobre' element={<Sobre />}/>
                    </Route>
                    <Route path="prato/:id" element={<Prato />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Routes>
                {/* podemos criar quantos routes quisermos  */}
                {/* vamos até prato  */}
                <Footer />
            </Router>
            </main>
    );
}