import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProductsByToken } from './store/actions/products';

class Home extends Component {

    componentDidMount() {
        let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
        this.props.getProductsByToken(session);
    }

    logOut = () => {
        localStorage.removeItem('loggedIn');
        sessionStorage.removeItem('loggedIn');
        this.props.history.push('/');
    }

    addUser = () => {
        this.props.history.push('/add');
    }

    deleteProduct = (e) =>{
        let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn')
        console.log(e.target.name);
        fetch('http://localhost:3004/products/' + e.target.name, {
            method: "DELETE"
        })
        .then(getProductsByToken(session));
    }

    render() {
        return (

            <div>
                <button onClick={this.addUser}>Add</button>
                {this.props.products.length === 0 ? (
                    <div>LOADING</div>)
                    : (<table>
                        <thead>
                            <tr>
                                {Object.keys(this.props.products[0]).map((key, index) => {
                                    if (key !== "userId") {
                                        return <td key={index}>{key}</td>;
                                    }
                                })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map((product, index) =>
                                <tr key={index}>
                                    {Object.keys(product).map((key, index) => {
                                        if (key !== "id") {
                                            return <td key={index}>{product[key]}</td>;
                                        }
                                    })
                                    }
                                    <td key='edit'><button>Edit</button></td>
                                    <td key='delete'>
                                        <button name={product.id} onClick={this.deleteProduct}>
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>)}
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        products: state.products,
    }
};

const mapDispatchToProps = {
    getProducts,
    getProductsByToken,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);