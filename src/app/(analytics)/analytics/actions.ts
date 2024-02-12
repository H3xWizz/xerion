"use server"

import si from 'systeminformation'
const osu = require('node-os-utils')
import Docker from 'dockerode';
import getDockerSocketpath from "@/lib/get-docker-socketpath";
import {prisma} from "@/lib/prisma";

const docker = new Docker({socketPath: getDockerSocketpath()})

export const getOSInfo = async () => {
    return await si.osInfo()
}

export const getProcessesInfo = async () => {
    return await si.processes()
}

export const getNetworkInfo = async () => {
    return await si.networkStats()
}

export const getFileSystemInfo = async () => {
    return await si.diskLayout()
}

export const getDockerInfo = async () => {
    return await docker.info()
}

export const createUsageCPU = async () => {
    try {
        const usage = await osu.cpu.usage()
        const free = await osu.cpu.free()

        console.log(usage, free)
    } catch (e) {

    }
}