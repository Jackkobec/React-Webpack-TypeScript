// import * as React from "react";
// import '../styles/style.css';
//
// type Person = {
//     firstName?: string;
//     secondName?: string;
//     middleName?: string;
// }
//
// type SampleState = {
//     person: Person;
//     errorText?: string;
// }
//
// export class ValidationSample extends React.Component<any, SampleState> {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errorText: '',
//
//             person: {
//                 firstName: '',
//                 secondName: '',
//                 middleName: ''
//             }
//         }
//     }
//
//     render() {
//         let {errorText, person} = this.state;
//
//         return (
//             <div>
//                 {/*                <form>
//                  <div >
//                  <label style={ {marginRight: '10px'} } htmlFor="input1">Имя</label>
//                  <input id="input1" type="text" value={ person.firstName }/>
//                  </div>
//                  <div >
//                  <label style={ {marginRight: '10px'} } htmlFor="input2">Фамилия</label>
//                  <input id="input2" type="text" value={ person.secondName }/>
//                  </div>
//                  <div >
//                  <label style={ {marginRight: '10px'} } htmlFor="input3">Отчество</label>
//                  <input id="input3" type="text" value={ person.middleName }/>
//                  </div>
//                  <div style={ {marginTop: '10px'} }>
//                  <input id="button1" type="button" value="Validate"/>
//                  </div>
//                  <h2>{ errorText }</h2>
//                  </form>*/}
//
//                 <table>
//                     <tbody>
//                     <tr>
//                         <td >
//                             <label style={ {marginRight: '10px'} } htmlFor="input1">Имя</label>
//                         </td>
//                         <td>
//                             <input id="input1" type="text" onChange={ this.setFirstName } value={ person.firstName }/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td >
//                             <label style={ {marginRight: '10px'} } htmlFor="input2">Фамилия</label>
//                         </td>
//                         <td>
//                             <input id="input2" type="text" onChange={ this.setSecondName } value={ person.secondName }/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td >
//                             <label style={ {marginRight: '10px'} } htmlFor="input3">Отчество</label>
//                         </td>
//                         <td>
//                             <input id="input3" type="text" onChange={ (e) => this.setPersonField(e, 'middleName') }
//                                    value={ person.middleName }/>
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//                 <div style={ {marginTop: '10px'} }>
//                     <input id="button1" type="button" value="Validate"/>
//                 </div>
//                 <h2>{ errorText }</h2>
//             </div >
//         );
//     }
//
//     setFirstName = (e) => {
//         let value = (e.target as HTMLInputElement).value;
//
//         let person = this.state.person;
//         person.firstName = value;
//
//         this.setState({person});
//
//         /*        this.setState((prevState) => {
//          return {person: {...prevState.person, firstName: value}}
//          });*/
//     }
//     setSecondName = (e) => {
//         let value = (e.target as HTMLInputElement).value;
//
//         this.setState((prevState) => {
//             return {person: {...prevState.person, secondName: value}}
//         });
//     }
//     setMiddleName = (e) => {
//         let value = (e.target as HTMLInputElement).value;
//
//         this.setState((prevState) => {
//             return {person: {...prevState.person, middleName: value}}
//         });
//     }
//
//     setPersonField = (e, field) => {
//         let value = (e.target as HTMLInputElement).value;
//
//         this.setState((prevState) => {
//             return {person: {...prevState.person, [field]: value}}
//         });
//     }
// }
