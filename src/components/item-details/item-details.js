import React, { Component } from 'react'
import "./item-details.css";
import Spinner from "../spinner";


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label} </span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };


export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true,
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.setState({
                loading: true,
            });
            this.updateItem();
        }
    };

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false,
                })
            });
    };

    render() {

        const { loading, item, image } = this.state;

        if (!item) return <h4 className='text-body-secondary'>Select an item</h4>;

        const hasData = !loading;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <ItemView item={item} props={this.props} image={image} /> : null;

        return (
            <div className="card mb-3 border-0">
                {spinner}
                {content}
            </div>
        )
    }
}

const ItemView = ({ item, image, props }) => {

    const { name } = item;

    return (
        <div className='row g-0'>
            <div className='col-lg-4'>
                <img
                    className="img-fluid rounded-start rounded-end"
                    src={image}
                    alt="..." />
            </div>
            <div className='col-lg-8'>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


