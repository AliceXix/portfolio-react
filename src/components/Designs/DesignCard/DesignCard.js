import React from "react";
import { DesignList } from "../../../data/DesignData";
import {
    Card,
    CardLeft,
    CardRight,
    Stack,
    BtnGroup,
} from "./DesignCardElements.js";
function DesignCard() {
    return (
        <>
            {DesignList.map((list, index) => (
                <Card key={index}>
                    <CardLeft>
                        <img src={list.img} alt={list.name} />
                    </CardLeft>
                    <CardRight>
                        <h4>{list.title}</h4>
                        <p>{list.description}</p>
                        <Stack>
                            {list.img_credit ?
                            <div><span className="stackTitle">Image credit -</span> <span className="tags">{list.img_credit}</span></div>
                            :
                            <div></div>}

                        </Stack>
                        <BtnGroup>
                            {list.figma_url ?
                            <a
                                className="btn PrimaryBtn"
                                href={list.figma_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Figma ➜
                            </a>
                            :
                            <a
                                className="btn PrimaryBtn"
                                    href={list.figma_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Figma coming soon
                            </a>}
                        </BtnGroup>
                    </CardRight>
                </Card>
            ))}
        </>
    );
}

export default DesignCard;
