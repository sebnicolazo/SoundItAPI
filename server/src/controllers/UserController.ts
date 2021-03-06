/**
 * Created by Lakio on 16/01/2017.
 */

import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./interfaces/BaseController");
import logger = require("./../tools/Logger");


class UserController implements IBaseController <UserBusiness> {

    private userBusiness;

    constructor(){
        this.userBusiness = new UserBusiness();
    }

    //Show user detail
    findById(req: express.Request, res: express.Response): void {
        try
        {
            // var _id: string = req.params._userId;
            //
            // this.userBusiness.findById(_id, (error, result) => {
            // //var result = this.userBusiness.findById(_id, result);// => {
            //     if(error)
            //     {
            //         logger.warn("findById : error", {"error": error});
            //         res.status(400).send({"result": "Bad Request"});
            //     }
            //     else
            //     {
            //         // var jsonObject = {};
            //         //
            //         // jsonObject['request id'] = _id;
            //         // jsonObject['id'] = result.id;
            //         // jsonObject['login'] = result.login;
            //         // jsonObject['email'] = result.email;
            //         // jsonObject['firstName'] = result.firstName;
            //         // jsonObject['lastName'] = result.lastName;
            //         // jsonObject['phoneNumber'] = result.phoneNumber;
            //         // jsonObject['cellphoneNumber'] = result.cellphoneNumber;
            //         //
            //         //res.json(JSON.stringify(jsonObject));
            //         res.json(JSON.stringify(result));
            //     }
            // });
        }
        catch (e)  {
            logger.error("findById : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try
        {
            // this.userBusiness.retrieve((error, result) => {
            //     if(error)
            //     {
            //         logger.warn("retrieve : error", {"error": error});
            //         res.status(400).send({"result": "Bad Request"});
            //     }
            //     else
            //     {
            //         // var jsonObject = {};
            //         //
            //         // jsonObject['id'] = result.id;
            //         // jsonObject['login'] = result.login;
            //         // jsonObject['email'] = result.email;
            //         // jsonObject['firstName'] = result.firstName;
            //         // jsonObject['lastName'] = result.lastName;
            //         // jsonObject['phoneNumber'] = result.phoneNumber;
            //         // jsonObject['cellphoneNumber'] = result.cellphoneNumber;
            //         //
            //         // res.json(JSON.stringify(jsonObject));
            //         res.json(JSON.stringify(result));
            //     }
            // });
        }
        catch (e)  {
            logger.error("retrieve : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show user detail edition view
    getEditionView(req: express.Request, res: express.Response): void {
        try
        {
            this.findById(req,res);
        }
        catch (e)  {
            logger.error("getEditionView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show user application settings edition view
    getUserSettingsEditionView(req: express.Request, res: express.Response): void {
        try
        {
            var _id: string = req.params._userId;

            this.userBusiness.getUserSettings(_id, (error, result) => {
                //var result = userBusiness.findById(_id, result);// => {
                if(error)
                {
                    logger.warn("getUserSettingsEditionView : error", {"error": error});
                    res.status(400).send({"result": "Bad Request"});
                }
                else
                {
                    res.json(JSON.stringify(result));
                }
            });
        }
        catch (e)  {
            logger.error("getUserSettingsEditionView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show saved playlist creation view
    getSavedPlaylistCreationView(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("getSavedPlaylistCreationView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show friend creation view
    getFriendCreationView(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("getFriendCreationView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show friend message view
    getFriendMessageCreationView(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("getFriendMessageCreationView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show subscribed event view
    getSubscribeEventCreationView(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("getSubscribeEventCreationView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Show user creation view
    getCreationView(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("getCreationView : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }


    //Create a user
    create(req: express.Request, res: express.Response): void {
        //TODO
        try
        {
            // var user: IUserModel = <IUserModel>req.body;
            // this.userBusiness.create(user, (error, result) => {
            //     if(error)
            //     {
            //         logger.warn("Create : error", {"error": error}, user);
            //         res.status(400).send({"result": "Bad Request"});
            //     }
            //     else
            //         res.status(201).send({"result": "Created", "data": result});
            // });
        }
        catch (e)  {
            logger.error("create : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Add room to favorite
    addRoomToFavorite(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("addRoomToFavorite : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Save a playlist
    savePlaylist(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("savePlaylist : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Add a friend
    addFriend(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("addFriend : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Send message to friend
    sendMessage(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("sendMessage : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Subscribe event
    subscribeToEvent(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("subscribeToEvent : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }


    //Update an user
    update(req: express.Request, res: express.Response): void {
        //TODO
        try
        {
            // var user: IUserModel = <IUserModel>req.body;
            // var _id: string = req.params._id;
            // this.userBusiness.update(_id, user, (error, result) => {
            //     if(error)
            //     {
            //         logger.warn("update : error", {"error": error}, user);
            //         res.status(400).send({"result": "Bad Request"});
            //     }
            //     else
            //         res.status(200).send({"result": "Updated", "data": result});
            // });
        }
        catch (e)  {
            logger.error("update : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Save user settings
    updateAppSettings(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("updateAppSettings : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    delete(req: express.Request, res: express.Response): void {
        //TODO
        try
        {
            var _id: string = req.params._id;
            this.userBusiness.delete(_id, (error, result) => {
                if(error)
                {
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

    //Delete an event
    deleteFriend(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("deleteFriend : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

    //Delete an event subscription
    deleteEventSubscription(req: express.Request, res: express.Response): void {
        //TODO
        try
        {

        }
        catch (e)  {
            logger.error("deleteEventSubscription : error", {"error": e});
            res.status(400).send({"result": "Bad Request"});
        }
    }

}
export = UserController;