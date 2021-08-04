import React, {PureComponent} from 'react';
import {Row} from "react-bootstrap";

const UserProfile = (props) => {
    const {user} = props;
    const renderUser = () => {
        return {
            if(user) {
                <Row>{user.Id} </Row>
                <Row>{user.name} </Row>
                <Row>{user.email} </Row>
                <Row>{user.username} </Row>
            }else{
                <></>
        }
    }
}
return (
    {renderUser()}
);
}

export default UserProfile;