export default function MainPage(){
    return (
        <>        
            <div className="container w-screen h-screen">
                <header className="item-flex item-menu">Cabeçalho</header>
                <nav className="item-flex item-sidebar">Navegação</nav>
                <main className="item-flex item-conteudo"> Conteudo</main>
                <footer className="item-flex item-rodape"> Rodape</footer>
            </div>
    
        </>
    )
}