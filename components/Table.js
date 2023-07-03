export function Table({balance,total,allData,outgoingData,incomingData,dropDown,dropDownAll,dropDownIncoming,dropDownOutgoing,setDropDown,setDropDownAll,setDropDownIncoming,setDropDownOutgoing}){
  
    return(

        <div className="token-details pt-4">
                <table>
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th>Balance</th>
                      <th>Net Flow</th>
                      <th>Inflow/Outflow</th>
                      <th>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <g>
                            <rect fill="none" height="24" width="24" />
                            <rect fill="none" height="24" width="24" />
                          </g>
                          <g>
                            <g>
                              <path d="M17.29,5.71L17.29,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,9.58L8.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.68,6.73,17.68,6.1,17.29,5.71z" />
                              <path d="M17.29,12.3L17.29,12.3c-0.39-0.39-1.02-0.39-1.41,0L12,16.17l-3.88-3.88c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.68,13.32,17.68,12.69,17.29,12.3z" />
                            </g>
                          </g>
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="token-icon">
                          <div aria-label="" className="svg-parent">
                            <svg
                              data-cy="animation"
                              viewBox="0 0 36 36"
                              className="fdaix-token-svg"
                            >
                              <clipPath id="clip">
                                <polygon points="18,18, 30.5,0 36,10.2"></polygon>
                              </clipPath>
                              <mask id="mask">
                                <rect
                                  x="-3"
                                  y="-3"
                                  width="42"
                                  height="42"
                                  fill="white"
                                ></rect>
                                <polygon
                                  points="18,18, 30.5,0 36,10.2"
                                  fill="black"
                                ></polygon>
                              </mask>
                              <circle
                                mask="url(#mask)"
                                r="17.5px"
                                cx="18"
                                cy="18"
                                stroke="#10BB35FF"
                                stroke-width="1"
                                fill="transparent"
                              ></circle>
                              <circle
                                clipPath="url(#clip)"
                                r="17px"
                                cx="18"
                                cy="18"
                                strokeDasharray="2"
                                stroke="#10BB35FF"
                                stroke-width="2"
                                fill="transparent"
                              ></circle>
                            </svg>
                            <div
                              class="MuiAvatar-root MuiAvatar-circular token-avatar-parent"
                              data-cy="token-icon"
                            >
                              <img
                                alt="TESTx token icon"
                                src="https://raw.githubusercontent.com/superfluid-finance/assets/master/public//tokens/dai/icon.svg"
                                class="MuiAvatar-img avatar-token"
                              ></img>
                            </div>
                          </div>
                          <h4 className="fdaix">TESTx</h4>
                        </div>
                      </td>
                      <td>
                        <h4 className="token-balance">{balance}</h4>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <div
                          className="parent-drop-down"
                          onClick={() => {
                            // loadData();
                            // setDropDown(!dropDown);
                            // setDropDownAll(!dropDownAll);
                          }}
                        >
                          <svg
                            class={
                              dropDown
                                ? "drop-down-svg active"
                                : "drop-down-svg"
                            }
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ExpandCircleDownOutlinedIcon"
                          >
                            <path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={5} className="dropdown-table-td">
                        <div>
                          <table className="dropdown-table">
                            <thead>
                              <tr>
                                <td colSpan={6} className="dropdown-table-td">
                                  <div className="dropdown-row">
                                    <div className="dropdown-btn-parent">
                                      <button
                                        className={
                                          dropDownAll ? "active" : ""
                                        }
                                        onClick={() => {
                                          setDropDownAll(true);
                                          setDropDownIncoming(false);
                                          setDropDownOutgoing(false);
                                        }}
                                      >
                                        {total.length > 0
                                          ? "All (" + total[0][0] + ")"
                                          : "All"}
                                      </button>
                                      <button
                                        className={
                                          dropDownIncoming ? "active" : ""
                                        }
                                        onClick={() => {
                                          setDropDownAll(false);
                                          setDropDownIncoming(true);
                                          setDropDownOutgoing(false);
                                        }}
                                      >
                                        {total.length > 0
                                          ? "Incoming (" + total[0][2] + ")"
                                          : "Incoming"}
                                      </button>
                                      <button
                                        className={
                                          dropDownOutgoing ? "active" : ""
                                        }
                                        onClick={() => {
                                          setDropDownAll(false);
                                          setDropDownIncoming(false);
                                          setDropDownOutgoing(true);
                                        }}
                                      >
                                        {total.length > 0
                                          ? "Outgoing (" + total[0][1] + ")"
                                          : "Outgoing"}
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>To / From</th>
                                <th>All Time Flow</th>
                                <th>Flow Rate</th>
                                <th>Flow Operator</th>
                                <th>Start / End Date</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {/**************all flow data************/}
                              {dropDownAll && allData?.map((item, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                      {item[4] ? (
                                        <h6>
                                          -&gt;&nbsp;{item[0].slice(0, 5)}
                                          ...
                                          {item[0].slice(38, 42)}
                                        </h6>
                                      ) : (
                                        <h6>
                                          &lt;-&nbsp;{item[0].slice(0, 5)}
                                          ...
                                          {item[0].slice(38, 42)}
                                        </h6>
                                      )}
                                    </td>
                                    <td>{item[2]}</td>
                                    <td>-</td>
                                    <td>
                                      {item[1].slice(0, 5)}...
                                      {item[1].slice(38, 42)}
                                    </td>
                                    <td>{item[3]}</td>
                                  </tr>
                                );
                              })}
                              {/**************outgoing flow data************/}
                              {dropDownOutgoing && outgoingData?.map((item, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                      -&gt;&nbsp;
                                      {item[1].slice(0, 5)}...
                                      {item[1].slice(38, 42)}
                                    </td>
                                    <td>{item[3]}</td>
                                    <td>-</td>
                                    <td>
                                      {item[2].slice(0, 5)}...
                                      {item[2].slice(38, 42)}
                                    </td>
                                    <td>{item[4]}</td>
                                  </tr>
                                );
                              })}
                              {/**************incoming flow data************/}
                              {dropDownIncoming && incomingData?.map((item, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                      &lt;-&nbsp;
                                      {item[0].slice(0, 5)}...
                                      {item[0].slice(38, 42)}
                                    </td>
                                    <td>{item[3]}</td>
                                    <td>-</td>
                                    <td>
                                      {item[2].slice(0, 5)}...
                                      {item[2].slice(38, 42)}
                                    </td>
                                    <td>{item[4]}</td>
                                  </tr>
                                );
                              })}

                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>


    )

}