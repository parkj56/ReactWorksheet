import React from 'react';

const ListOfNames = (props) => {
    return (
            <div className="col text-center">
                <div>
                    <h1 className="display-4">A list of Names</h1>
                    <ol className="list group">
                        {props.names.map((a_name) => {
                            return (
                            <li className="list group">{a_name}</li>
                            );
                        })}
                    </ol>
            </div>
            <div className="col"></div>
        </div>
    );
}

export default ListOfNames;