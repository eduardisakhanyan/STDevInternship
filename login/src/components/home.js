import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getProducts,
    getProductsByToken,
    clearProducts
} from '../store/actions/products';
import { clearUser,
        getUserByToken } from '../store/actions/user';
import { setProductById } from '../store/actions/product';

class Home extends Component {

    state = {
        currentPage: 1,
        limit: 3,
    };

    componentDidMount() {
        let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
        if (session) {
            this.props.getUserByToken(session);
            this.props.getProductsByToken(session, this.state.currentPage, this.state.limit);
        }
    }

    logOut = () => {
        this.props.clearProducts();
        this.props.clearUser();
        localStorage.removeItem('loggedIn');
        sessionStorage.removeItem('loggedIn');
        this.props.history.push('/');
    }

    addUser = () => {
        this.props.history.push('/add');
    }

    editUser = (e) => {
        this.props.setProductById(e.target.name, this.props.history.push);
    }

    deleteProduct = async (e) => {
        let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
        let id = this.props.user.id;
        console.log(e.target.name);
        await fetch('http://localhost:3004/products/' + e.target.name, {
            method: "DELETE"
        })
        let oldTotal = await fetch('http://localhost:3004/users/' + id)
        .then(response => response.json())
        oldTotal.totalProducts--;
        fetch('http://localhost:3004/users/' + id, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(oldTotal)
        })
        .then(()=> this.props.getProductsByToken(session, this.state.currentPage, this.state.limit));
    }

    handleClick = (e) => {
        let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
        this.props.getProductsByToken(session, e.target.name, this.state.limit);
        this.setState({currentPage: +e.target.name})
    }

    render() {
        let pages = [];
        for(let i = 0 ; i < Math.ceil(this.props.user.totalProducts / this.state.limit) ; ++i) {
            pages.push(<button key={i} name={i+1} onClick={this.handleClick}>{i+1}</button>);
        }
        return (

            <div>
                <button onClick={this.addUser}>Add</button>
                {this.props.products.length === 0 ? (
                    <div>LOADING</div>)
                    : (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        {Object.keys(this.props.products[0]).map((key, index) => {
                                            if (key === "id" || key === "userId") {
                                            } else {
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
                                                if (key === "id" || key === "userId") {
                                                } else {
                                                    return <td key={index}>{product[key]}</td>;
                                                }
                                            })
                                            }
                                            <td key='edit'>
                                                <button name={product.id} onClick={this.editUser}>
                                                    Edit
                                        </button></td>
                                            <td key='delete'>
                                                <button name={product.id} onClick={this.deleteProduct}>
                                                    Delete
                                        </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div>
                                {this.props.user.totalProducts?(<span>
                                    {pages}
                                </span>):(<div>Loading</div>)}
                                
                            </div>
                        </div>)}
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        products: state.products,
        product: state.product,
    }
};

const mapDispatchToProps = {
    getProducts,
    getProductsByToken,
    setProductById,
    clearProducts,
    clearUser,
    getUserByToken
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);