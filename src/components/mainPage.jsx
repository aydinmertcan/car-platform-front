import Layout from './layout.jsx'
import Autocomplete from './autocomplete.jsx'
      

const HomePage = () => {
    return (
        <>
            <Layout />
            <div className="row" >
                <div className="col-md-4" id='autocompleteDiv'>
                    <Autocomplete/> 
                </div>
            </div>

        </>

    )
}

export default HomePage