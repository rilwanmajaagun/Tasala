import express from "express";
import '../handlers';
declare const expressConfig: (app: express.Application) => void;
export default expressConfig;
