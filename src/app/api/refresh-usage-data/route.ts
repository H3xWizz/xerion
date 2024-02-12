import {NextResponse} from "next/server";
import {createUsageCPU, getOSInfo} from "@/app/(analytics)/analytics/actions";

export async function GET() {
    try {
        const cpu = await createUsageCPU()
            const data = cpu
        return NextResponse.json(data, {status: 200})
    } catch (e) {
        return NextResponse.json({error: e}, {status: 500})
    }
}