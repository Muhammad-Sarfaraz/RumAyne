<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function __invoke(Request $request)
    {
        if (request()->isMethod('get')) {
            return view('frontend.pages.auth.login');
        }

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::guard('admin')->attempt($credentials, $request->remember)) {
            return "Success!";
        }

        return "Something really bad happened!";
    }
}
