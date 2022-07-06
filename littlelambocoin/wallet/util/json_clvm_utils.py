from typing import Any

from littlelambocoin.types.blockchain_format.program import Program


def json_to_littlelambocoinlisp(json_data: Any) -> Any:
    list_for_littlelambocoinlisp = []
    if isinstance(json_data, list):
        for value in json_data:
            list_for_littlelambocoinlisp.append(json_to_littlelambocoinlisp(value))
    else:
        if isinstance(json_data, dict):
            for key, value in json_data:
                list_for_littlelambocoinlisp.append((key, json_to_littlelambocoinlisp(value)))
        else:
            list_for_littlelambocoinlisp = json_data
    return Program.to(list_for_littlelambocoinlisp)
