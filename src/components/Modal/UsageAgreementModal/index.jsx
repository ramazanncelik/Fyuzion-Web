"use client"

import { useAppContext } from "@/contexts/AppContext"
import usageagreement from "@/utils/usageagreement"

const UsageAgreementModal = ({close}) => {

    const { isDarkMode, language } = useAppContext();

    return (
        <div className="w-full h-full p-1 bg-white rounded-lg flex flex-col space-y-2">
            <div className="flex-1 p-2 overflow-y-auto">
                {usageagreement.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-row space-x-2">
                            <p className="w-max font-bold text-black">
                                {item.id}.
                            </p>

                            <p className="w-full text-black dark:text-white mb-2">
                                {language.includes("tr") ? item.tr : item.en}
                            </p>
                        </div>
                    )
                })}
            </div>

                <button className="w-full h-max p-2 bg-blue-500 items-center rounded-lg" onClick={() => close()}>
                    <p className="text-white font-bold">
                        {language.includes("tr") ? "Kapat" : "Close"}
                    </p>
                </button>
        </div>
    )
}

export default UsageAgreementModal