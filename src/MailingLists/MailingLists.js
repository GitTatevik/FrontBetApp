import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../StyleSheet/MailingLists.css';
import { EditAddList } from './EditAddList';

const datab = ["DZMER PAPINER", "MARKETOLOGNER", "BJISHKNER", "PARAPNER", "SIRELI HAYRENAKICNER"]
const Database = { name: "Marketologs", emails: ["eagis92@gmail.com", "easdsgis92@gmail.com", "eauytrfsgis92@gmail.com", "eagssfe@gmail.com", "mkhitaryan@mail.ru", "movsiyan@mail.ru", "petrosyan@mail.ru", "esiminchyan@esiminch.ru"] }

class MailingLists extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, addNew: false, };
        this.handleEdit = this.handleEdit.bind(this);
        this.hideEdit = this.hideEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault()
        this.setState({ edit: !this.state.edit });
        console.log(this.state.edit)
    }

    hideEdit(e) {
        e.preventDefault();
        this.setState({ edit: !this.state.edit })
        console.log(this.state.edit)
    }

    handleAddNew() {
        this.setState({ addNew: !this.state.addNew })
    }

    renderTbody() {
        let that = this;
        return (
            datab.map(function (value, key) {
                return (<tr key={key} className=""><td className=" tabledata mailVal">{value}</td>
                    <td className="tabledata"><button className="listbut mdl-button mdl-js-button mdl-button--raised" onClick={that.handleEdit.bind(that)}>EDIT</button></td>
                    <td className="tabledata"><button onClick={that.handleAddNew.bind(that)} className="listbut mdl-button mdl-js-button mdl-button--raised">ADD NEW</button></td></tr>)
            })
        )
    }
    
    renderExistedList() {
        return (
            <div className="mainCont">
                <table className="mailingListTable">
                    <thead>
                        <tr>
                            <th className="tablehead">NAME</th>
                            <th className="tablehead">EDIT</th>
                            <th className="tablehead">ADD NEW</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTbody()}</tbody>
                </table>
            </div>
        )
    }

    render() {
        if (this.state.edit) {
            return (
                <div>
                    <div>
                        {this.renderExistedList()}
                    </div>
                    <div>
                        <EditAddList editMode={this.state.edit} editFunc={this.hideEdit} database={Database} />
                    </div>
                </div>
            )
        }
        else if (this.state.addNew) {
            return (
                <div>
                    <div>{this.renderExistedList()}</div>
                    <div><EditAddList /></div>
                </div>
            )
        }
        else {
            return this.renderExistedList()
        }
    }
}
export default MailingLists;


