export const Paginacion = ({page, total_pages}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total_pages); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginacion">
            {pageNumbers.map((number)=>
                <li>
                    <a href="!#" className="page-link">
                    {number}
                    </a>

                </li>
                
            )}    
                
            </ul> 


        </nav>



        

    )


}