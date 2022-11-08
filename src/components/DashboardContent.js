import React from "react";

function DashboardContent() {
  return (
    <div>
      <div className="content-start transition">
        <div className="container-fluid dashboard">
          <div className="content-header">
            <h1>Dashboard</h1>
            <p></p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center">
                      <i className="fas fa-inbox icon-home bg-primary text-light"></i>
                    </div>
                    <div className="col-8">
                      <p>Revenue</p>
                      <h5>$65</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center">
                      <i className="fas fa-clipboard-list icon-home bg-success text-light"></i>
                    </div>
                    <div className="col-8">
                      <p>Orders</p>
                      <h5>3000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center">
                      <i className="fas fa-chart-bar  icon-home bg-info text-light"></i>
                    </div>
                    <div className="col-8">
                      <p>Sales</p>
                      <h5>5500</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center">
                      <i className="fas fa-id-card  icon-home bg-warning text-light"></i>
                    </div>
                    <div className="col-8">
                      <p>Employes</p>
                      <h5>256</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <div id="columnchart"></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Recent Messages</h4>
                </div>
                <div className="card-body pb-4">
                  <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                      <img src="assets/images/message/4.jpg" alt="" />
                    </div>
                    <div className="name ms-4">
                      <h5 className="mb-1">Hank Schrader</h5>
                      <h6 className="text-muted mb-0">@johnducky</h6>
                    </div>
                  </div>
                  <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                      <img src="assets/images/message/5.jpg" alt="" />
                    </div>
                    <div className="name ms-4">
                      <h5 className="mb-1">Dean Winchester</h5>
                      <h6 className="text-muted mb-0">@imdean</h6>
                    </div>
                  </div>
                  <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                      <img src="assets/images/message/1.jpg" alt="" />
                    </div>
                    <div className="name ms-4">
                      <h5 className="mb-1">John Doe</h5>
                      <h6 className="text-muted mb-0">@Doejohn</h6>
                    </div>
                  </div>
                  <div className="px-4">
                    <button className="btn btn-block btn-xl btn-primary font-bold mt-3">
                      Start Conversation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Order Id</th>
                          <th scope="col">Billing Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Total</th>
                          <th scope="col">Payment Status</th>
                          <th scope="col">Payment Method</th>
                          <th scope="col">View Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#SK2548 </th>
                          <td>Neal Matthews</td>
                          <td>07 Oct, 2022</td>
                          <td>$400</td>
                          <td>
                            <span className="text-success">Paid</span>
                          </td>
                          <td>Mastercard</td>
                          <td>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">#SK2548 </th>
                          <td>Neal Matthews</td>
                          <td>07 Oct, 2022</td>
                          <td>$400</td>
                          <td>
                            <span className="text-success">Paid</span>
                          </td>
                          <td>Visa</td>
                          <td>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">#SK2548 </th>
                          <td>Neal Matthews</td>
                          <td>07 Oct, 2022</td>
                          <td>$400</td>
                          <td>
                            <span className="text-danger">Chargeback</span>
                          </td>
                          <td>Paypal</td>
                          <td>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">#SK2548 </th>
                          <td>Neal Matthews</td>
                          <td>07 Oct, 2022</td>
                          <td>$400</td>
                          <td>
                            <span className="text-warning">Refund</span>
                          </td>
                          <td>Visa</td>
                          <td>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
