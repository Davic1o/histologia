<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TissueTypeSeeder extends Seeder
{
    public function run()
    {
        $tissueTypes = [
            ['id_user' => '1','codigo' => 'TEJ001', 'name' => 'Tejido Epitelial'],
            ['id_user' => '1','codigo' => 'TEJ002', 'name' => 'Tejido Conectivo'],
            ['id_user' => '1','codigo' => 'TEJ003', 'name' => 'Tejido Muscular'],
            ['id_user' => '1','codigo' => 'TEJ004', 'name' => 'Tejido Nervioso'],
        ];

        DB::table('type_tissues')->insert($tissueTypes);
    }
}
