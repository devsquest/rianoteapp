import React from "react";
import BasicInfo from "./users/BasicInfo";

const Dashboard = (props) => {
  const {user} = props;
  return (
      <div id="page-wrapper" className="dashboard-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">Welcome to your Note Designer User Dashboard</h3>
                <button className="btn btn-success btn-sm" id="btnNewNote" data-toggle="modal" data-target="#responsive-modal">
                  Start using your Ria Note now&nbsp;
                  <i className="fa fa-arrow-circle-right"/>
                </button>
                <div className="card">
                  <div className="card-header">
                    <h5>Basic information</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group row m-b-5">
                      <label className="col-sm-4 col-form-label">Email:</label>
                      <div className="col-sm-8">
                        <input type="text" readOnly="" className="form-control-plaintext" value="sawraw87@gmail.com"/>
                      </div>
                    </div>
                    <div className="form-group row m-b-5">
                      <label className="col-sm-4 col-form-label">Signature:</label>
                      <div className="col-sm-8">
                        <textarea readOnly="" className="form-control-plaintext" rows="2" style={{resize:'none'}}>
                          Sara ChaudhriLCSW
                        </textarea>
                        <button className="btn btn-primary btn-sm" data-toggle="modal"
                                data-target="#requestChangeSignatureModal">
                          Request to change signature
                        </button>
                      </div>
                    </div>
                    <div className="form-group row m-b-5">
                      <label className="col-sm-4 col-form-label">Billing information:</label>
                      <div className="col-sm-8">
                        <button className="btn btn-primary btn-sm" id="btnTempFSDashboardLink">
                          Get temporary link to FastSpring Dashboard
                        </button>
                        <a className="btn btn-success btn-sm" href="#" style={{display:'none'}} id="tempFSDashboardLink"
                           target="_blank">
                          Go to Fastspring
                          <i className="fas fa-arrow-alt-circle-right"/>
                        </a>
                        <i className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="right"
                           title=""
                           data-original-title="Fastspring, our secure retail partner, manages the billing for your account."/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Active Subscriptions assigned to your account</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div id="tableActiveSubscriptions_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="tableActiveSubscriptions_length">
                              <label>Show
                                <select name="tableActiveSubscriptions_length" aria-controls="tableActiveSubscriptions"
                                        className="custom-select custom-select-sm form-control form-control-sm">
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select> entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 text-right p-r-20">
                            <div id="tableActiveSubscriptions_filter" className="dataTables_filter">
                              <label>Search:
                                <input type="search" className="form-control form-control-sm" placeholder=""
                                       aria-controls="tableActiveSubscriptions"/>
                              </label>
                            </div>
                          </div>
                        </div>
                        <table className="tablesaw table-bordered table-hover table" data-tablesaw-sortable>
                          <thead>
                          <tr>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="persist">Subscription
                              <type></type></th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="3">Is active?
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="2">State
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="1">Started from
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="4">Valid until
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="5">Purchased by
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="6">Action
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="title"><a href="javascript:void(0)">Monthly Individual</a></td>
                            <td><span className="label label-success">Active</span></td>
                            <td><span className="label label-success">Active</span></td>
                            <td>2020-06-09</td>
                            <td>2021-02-09</td>
                            <td><span className="label label-info">You</span></td>
                            <td><span className="label label-danger">X Unassign me</span></td>
                          </tr>
                          <tr>
                            <td className="title"><a href="javascript:void(0)">Monthly Individual</a></td>
                            <td><span className="label label-warning">In Active</span></td>
                            <td><span className="label label-warning">In Active</span></td>
                            <td>2020-06-10</td>
                            <td>2021-02-11</td>
                            <td><span className="label label-info">You</span></td>
                            <td><span className="label label-danger">X Unassign me</span></td>
                          </tr>
                          <tr>
                            <td className="title"><a href="javascript:void(0)">Monthly Individual</a></td>
                            <td><span className="label label-success">Active</span></td>
                            <td><span className="label label-success">Active</span></td>
                            <td>2020-06-12</td>
                            <td>2021-02-12</td>
                            <td><span className="label label-info">You</span></td>
                            <td><span className="label label-danger">X Unassign me</span></td>
                          </tr>
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-6 m-t-20">
                            <div className="dataTables_info" id="editable-datatable_info" role="status"
                                 aria-live="polite">Showing 1 to 10 of 57 entries
                            </div>
                          </div>
                          <div className="col-sm-6 text-right">
                            <div className="dataTables_paginate paging_simple_numbers" id="editable-datatable_paginate">
                              <ul className="pagination">
                                <li className="paginate_button previous disabled" aria-controls="editable-datatable"
                                    tabIndex="0" id="editable-datatable_previous"><a href="#">Previous</a></li>
                                <li className="paginate_button active" aria-controls="editable-datatable" tabIndex="0">
                                  <a href="#">1</a></li>
                                <li className="paginate_button " aria-controls="editable-datatable" tabIndex="0"><a
                                    href="#">2</a></li>
                                <li className="paginate_button " aria-controls="editable-datatable" tabIndex="0"><a
                                    href="#">3</a></li>
                                <li className="paginate_button " aria-controls="editable-datatable" tabIndex="0"><a
                                    href="#">4</a></li>
                                <li className="paginate_button next" aria-controls="editable-datatable" tabIndex="0"
                                    id="editable-datatable_next"><a href="#">Next</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center"> 2021 &copy; Ria Note</footer>
      </div>
  );
};

// <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//   <div
//       className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//     <h1 className="h2">Welcome to your Ria Note Designer User Dashboard</h1>
//     <button
//         type="button"
//         className="btn btn-success text-uppercase"
//         data-toggle="modal"
//         data-target="#responsive-modal"
//     >
//       Start a New Note
//     </button>
//   </div>
//
//   <BasicInfo user={user}/>
//
//   <hr/>
//   <div className="row my-5">
//     <h2 className="mb-3">Active Subscriptions assigned to your account</h2>
//     <table id="paginationFullNumbers" className="table" width="100%">
//       <thead>
//       <tr>
//         <th className="th-sm">Subscription Type</th>
//         <th className="th-sm">Is Active</th>
//         <th className="th-sm">State</th>
//         <th className="th-sm">Started From</th>
//         <th className="th-sm">Valid Until</th>
//         <th className="th-sm">Purchased by</th>
//         <th className="th-sm">Action</th>
//       </tr>
//       </thead>
//       <tbody>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td>Monthly Individual</td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>
//           <span className="badge badge-pill badge-success">Active</span>
//         </td>
//         <td>2020-06-09</td>
//         <td>2020-06-09</td>
//         <td>
//           <span className="badge badge-pill badge-primary">You</span>
//         </td>
//         <td>
//           <button type="button" className="btn btn-danger">
//             Unassigned Me
//           </button>
//         </td>
//       </tr>
//       </tbody>
//     </table>
//   </div>
// </main>

export default Dashboard;
