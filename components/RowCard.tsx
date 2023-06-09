import {
    Add,
    Close,
    Favorite,
    FavoriteBorder, OpenInBrowser, OpenInFull, OpenInNew, OpenInNewOutlined,
    Remove,
    Search,
    ShoppingBagOutlined,
    ShoppingCart
} from "@mui/icons-material"
import clsx from "clsx"
import Image from "next/image"
import React, {ReactNode, useState} from "react"
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {color} from "@mui/system";
import {Pill} from "./Pill";

export const RowCard: React.FC<{
    name: string, title: string, link: string, labels: string[]
}> =
    ({name, title, link, labels}) => {
        const router = useRouter()

        function openSite() {
            router.push("/site/" + name.toLowerCase().split(" ").join("-"))
        }

        return (
            <div

                className="px-2 py-4 my-4 max-w-full bg-gray-100 hover:bg-gray-200 border border-gray-100 rounded-[16px] flex items-center cursor-pointer">

                <div className="flex-1 min-w-0 px-4 items-start" onMouseDown={openSite}>

                    <p className="mb-1 font-semibold text-gray-900 dark:text-gray-900 text-left">
                        {title}
                    </p>

                    <p className="mb-1 font-light test-xs text-gray-400 dark:text-gray-900 text-left">
                        {link}
                    </p>

                    <div className="flex flex-row self-stretch pt-2">
                        {Array.from(labels).map((v) => <Pill key={v} label={v}/>)}
                    </div>
                </div>

                <div className="flex flex-col self-stretch min-w-0 items-end pr-1">
                    <div className="flex flex-col">
                        {/*<a className="leading-none text-gray-500 hover:bg-gray-100 flex-shrink-0 mb-4 cursor-pointer">*/}
                        {/*    <FavoriteBorder/>*/}
                        {/*</a>*/}

                        <a className="leading-none text-gray-500 hover:bg-gray-300 flex-shrink-0 cursor-pointer rounded-sm" onMouseDown={() => router.push(link)}>
                            <OpenInNewOutlined/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }