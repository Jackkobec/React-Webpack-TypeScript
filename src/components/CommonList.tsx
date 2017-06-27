import * as React from "react";
import {Link} from "react-router";

export class CommonList extends React.Component<any, any> {

    render() {

        // return (
        //     <UserTable users={ users }/>
        // );

        return (
            <div>
                <aside>
                    <p>
                        <Link
                            to={`/handbooks/mans`} activeClassName="active">
                        </Link>
                    </p>
                    <p>
                        <Link
                            to={`/handbooks/girls`} activeClassName="active">
                        </Link>
                    </p>
                    <p>
                        <Link
                            to={`/handbooks/users`} activeClassName="active">
                        </Link>
                    </p>
                </aside>

                <section>
                    <div>
                        { this.props.children }
                    </div>
                </section>

            </div>

        );
    }
}
