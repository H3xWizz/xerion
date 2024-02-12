import {NextResponse} from "next/server";
import {getFileSystemInfo} from "@/app/(analytics)/analytics/actions";

export async function GET() {
    try {
        const data = await getFileSystemInfo()
        return NextResponse.json(data, {status: 200})
    } catch (e) {
        return NextResponse.json({error: e}, {status: 500})
    }
}