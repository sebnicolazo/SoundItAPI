/**
 * Created by Lakio on 16/01/2017.
 */

import express = require("express");
import IBaseController = require("./interfaces/BaseController");
import logger = require("./../tools/Logger");
import EventBusiness = require("../app/business/EventBusiness");
import {Event} from "../app/model/postgres/Event";

class EventController {

    private eventBusiness;

    constructor(){
        this.eventBusiness = new EventBusiness();
    }

    //Show events
    getEvents(): void {
        //TODO
    }

    //Show event detail
    getEventDetails(): void {
        //TODO
    }

    //Show event edition view
    getEditionView(): void {
        //TODO
    }

    //Show event creation view
    getCreationView(): void {
        //TODO
    }

    //Create event
    create(req: express.Request, res: express.Response): void {
        //TODO
        try {

            this.eventBusiness.create(JSON.parse(req.body), (error, result) => {
                if (error) {
                    logger.warn("create : error", {"error": error});
                    res.status(400).send({"result": "Bad Request"});
                }
                else
                    res.status(200).send({"result": "Created", "data": result});
            });
        }
        catch(e) {
            logger.warn("create : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Update an event
    update(req: express.Request, res: express.Response): void {
        //TODO
        try {

            this.eventBusiness.update(JSON.parse(req.body), (error, result) => {
                if (error) {
                    logger.warn("update : error", {"error": error});
                    res.status(400).send({"result": "Bad Request"});
                }
                else
                    res.status(200).send({"result": "Updated", "data": result});
            });
        }
        catch (e)  {
            logger.error("update : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});

        }
    }

    //Delete an event
    delete(req: express.Request, res: express.Response): void {
        try {

            this.eventBusiness.delete(JSON.parse(req.body), (error, result) => {
                if (error) {
                    logger.warn("delete : error", {"error": error});
                    res.status(400).send({"result": "Bad Request"});
                }
                else
                    res.status(200).send({"result": "Deleted", "data": result});
            });
        }
        catch (e)  {
            logger.error("delete : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});

        }
    }

}
export = EventController;