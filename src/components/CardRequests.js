import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/home.css";
import moment from "moment";
import { MdOutlineSearch } from "react-icons/md";
import { Row, Col, Card, Input, Tag, Button } from "antd";

const CardRequests = () => {
    const [search, setSearch] = useState("");
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const goToDetails = (e) => {
        navigate("/details");
      };
  return (
    <>
      <Card className="card-home">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={24}>
            <span className="titlegray">Requests</span>
          </Col>
          <Col xs={24} xl={24}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              prefix={<MdOutlineSearch />}
            />
          </Col>
          <Col xs={24} xl={24}>
            <Card className="card-request" onClick={goToDetails}>
              <Row gutter={[32, 22]}>
                <Col xs={18} xl={18}>
                  <Row gutter={[32, 22]}>
                    <Col xs={24} xl={24}>
                      <Tag className="tag-post" value={post}>
                        POST
                      </Tag>
                    </Col>
                    <Col xs={24} xl={10}>
                      <span className="white-description">#201abc</span>
                    </Col>
                    <Col xs={24} xl={12}>
                    <span className="white-description"> {moment("2020/08/11").format("DD/MM/YYYY")}</span>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} xl={6}>
                  <Button className="delete" type="primary" danger>X</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CardRequests