import React from "react";
import TopNav from "./common/topnav";
import SideNav from "./common/sidenav";

const Subscriptions = () => {
  return (
      <div id="page-wrapper" className="dashboard-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <div className="card">
                  <div className="card-header">
                    <h5>Subscriptions</h5>
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
                                </select>
                                entries</label>
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
                                data-tablesaw-priority="persist">Subscriptions type
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="3">Is active?
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="2">State
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="1">Occupied/Quantity
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="4">Started from
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="5">Valid until
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                data-tablesaw-priority="6">Action
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="title"><a href="#">Monthly Individual</a></td>
                            <td><span className="label label-success">Active</span></td>
                            <td><span className="label label-success">Active</span></td>
                            <td>1/1</td>
                            <td>2020-06-09</td>
                            <td>2020-06-09</td>
                            <td><button className="btn btn-info" data-toggle="modal"
                                   data-target="#responsive-modal">View Details</button></td>
                          </tr>
                          <tr>
                            <td className="title"><a href="#">Monthly Individual</a></td>
                            <td><span className="label label-success">Active</span></td>
                            <td><span className="label label-success">Active</span></td>
                            <td>1/1</td>
                            <td>2020-06-09</td>
                            <td>2020-06-09</td>
                            <td><button className="btn btn-info" data-toggle="modal"
                                   data-target="#responsive-modal">View Details</button></td>
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

export default Subscriptions;
