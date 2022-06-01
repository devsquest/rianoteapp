import React from "react";

const Requests = () => {
    return (
        <div id="page-wrapper" className="dashboard-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="white-box">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Refund Requests</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="tableActiveSubscriptions_wrapper"
                                             className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row request-rows">
                                                <div className="col-sm-12">
                                                    <p>You have not submitted any Refund Requests.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Change Signature Requests</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="tableActiveSubscriptions_wrapper"
                                             className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row request-rows">
                                                <div className="col-sm-12">
                                                    <p>You have not submitted any Requests to change you Signature.</p>
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

export default Requests;
